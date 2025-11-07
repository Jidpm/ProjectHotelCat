import prisma from "../Config/prisma.config.js";

export const getSettingByKey = async (key) => {
    return prisma.settings.findUnique({ where: { keyName: key } });
};

export const getAllSettings = async () => {
    return prisma.settings.findMany();
};

export const updateSettingByKey = async (key, newValue) => {
    return prisma.settings.update({
        where: { keyName: key },
        data: { keyValue: newValue },
    });
};

