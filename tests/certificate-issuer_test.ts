// deno-lint-ignore-file no-explicit-any
// Basic Clarinet test scaffold. Requires Clarinet.
// Docs: https://docs.hiro.so/stacks/clarinet

import { Clarinet, Tx, chain, Account, types } from "https://deno.land/x/clarinet/index.ts";

Clarinet.test({
  name: "Only instructor can register and issue certificates; queries work",
  async fn(chain: any, accounts: Map<string, Account>) {
    const deployer = accounts.get("deployer")!;
    const instructor = accounts.get("wallet_1")!;
    const student = accounts.get("wallet_2")!;

    const courseId = new TextEncoder().encode("course-101-identifier");
    // Use a 32-byte buffer; for demo purposes, slice/pad
    const buff32 = new Uint8Array(32);
    buff32.set(courseId.slice(0, 32));

    // Register course by instructor
    let block = chain.mineBlock([
      Tx.contractCall("certificate-issuer", "register-course", [types.buff(buff32)], instructor.address),
    ]);
    block.receipts[0].result.expectOk().expectBool(true);

    // Issue cert by non-instructor should fail
    block = chain.mineBlock([
      Tx.contractCall("certificate-issuer", "issue-certificate", [types.buff(buff32), types.principal(student.address)], deployer.address),
    ]);
    block.receipts[0].result.expectErr().expectUint(100n);

    // Issue cert by instructor should succeed
    block = chain.mineBlock([
      Tx.contractCall("certificate-issuer", "issue-certificate", [types.buff(buff32), types.principal(student.address)], instructor.address),
    ]);
    block.receipts[0].result.expectOk().expectBool(true);

    // is-certified == true
    const ro1 = chain.callReadOnlyFn("certificate-issuer", "is-certified", [types.buff(buff32), types.principal(student.address)], deployer.address);
    ro1.result.expectBool(true);

    // get-certificate returns some
    const ro2 = chain.callReadOnlyFn("certificate-issuer", "get-certificate", [types.buff(buff32), types.principal(student.address)], deployer.address);
    ro2.result.expectSome();
  },
});
