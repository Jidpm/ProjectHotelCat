import prisma from "../Config/prisma.config.js";

export const getUserBy = async (column, value) => {
//   console.log("column", column);
//   console.log("value", value);
  return await prisma.user.findUnique({ where: { [column]: value } });
};
export const createUser = async (userData) => {
//   console.log("userData", userData);
  return await prisma.user.create({
    data: userData,
    omit: { password: true },
    // select: {id:true, firstName: true}
});
};
