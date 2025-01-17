/**
 * This error is triggered when a CREATE statement
 * has an invalid option following the 'CREATE'.
 *
 * It would trigger for this:
 *   CREATE RUBBISH thing;
 * It wouldn't trigger for this:
 *   CREATE TABLE test;
 */
import { IChecker } from "../../interface";
import { PostgresCreate } from "../../../barrel/statements";
import { InvalidOption } from "../invalidOption";
declare class PostgresInvalidCreateOption extends InvalidOption implements IChecker {
    checker: PostgresCreate;
    appliesTo: string[];
}
export { PostgresInvalidCreateOption };
