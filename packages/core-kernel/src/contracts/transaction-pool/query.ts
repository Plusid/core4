import { Enums, Interfaces } from "@arkecosystem/crypto";

export type QueryPredicate = (transaction: Interfaces.ITransaction<Interfaces.ITransactionData>) => boolean;

export interface Query {
    getAll(): QueryIterable;
    getAllBySender(senderPublicKey: string): QueryIterable;
    getFromLowestPriority(): QueryIterable;
    getFromHighestPriority(): QueryIterable;
}

export interface QueryIterable extends Iterable<Interfaces.ITransaction<Interfaces.ITransactionData>> {
    wherePredicate(predicate: QueryPredicate): QueryIterable;
    whereId(id: string): QueryIterable;
    whereType(type: Enums.TransactionType): QueryIterable;
    whereTypeGroup(typeGroup: Enums.TransactionTypeGroup): QueryIterable;
    whereVersion(version: number): QueryIterable;
    whereKind(transaction: Interfaces.ITransaction<Interfaces.ITransactionData>): QueryIterable;

    has(): boolean;
    first(): Interfaces.ITransaction<Interfaces.ITransactionData>;
}