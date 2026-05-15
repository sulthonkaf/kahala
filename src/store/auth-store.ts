export type AuthUser = { id: string; name: string; email: string; role: "customer" | "admin" };
export const mockAuthUser: AuthUser = { id: "admin", name: "Kahala Admin", email: "admin@kahala.id", role: "admin" };
