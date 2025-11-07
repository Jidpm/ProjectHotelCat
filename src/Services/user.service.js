import prisma from "../Config/prisma.config.js";

export const getUserBy = async (column, value) => {
  return await prisma.user.findUnique({ where: { [column]: value } });
};
export const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
    omit: { password: true },
});
};

export async function getMe(id) {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
}

