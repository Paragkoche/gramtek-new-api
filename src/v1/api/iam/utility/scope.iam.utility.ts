export enum Scope {
    Self = 'SELF',
}
export enum Perform {
    Read = 'READ',
    Write = 'WRITE',
    Create = 'CREATE',
    Delete = 'DELETE',
    Update = 'UPDATE',
    All = 'ALL',
}

export const genScope = (scope: Scope, perform: Perform) => `${scope}:${perform}`