import prisma from "../Config/prisma.config.js"

export async function getCatInfo(catName) {
    console.log(catName)
    const catInfo = await prisma.catInfo.findMany({
        where: {catName }
    })
    if(catInfo) {

        console.log('catInfo', catInfo)
    } else {
        console.log("no cat info")
    }
    return catInfo
}

export const createCatInfo = async (catInfoData)=>{
    return await prisma.catInfo.create({
        data: catInfoData
    })
}