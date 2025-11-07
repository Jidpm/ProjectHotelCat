import { createCatInfo, getCatInfo } from "../Services/info.service.js"
import { addCatInfoSchema } from "../Validations/Schema.js"


export const addCatInfo = async(req, res)=>{
    // const { catName, age, breed, healthInfo } = req.body

    //validation
    const catDetailInfo = addCatInfoSchema.parse(req.body)

    const newCatInfo = {...catDetailInfo }
    const result = await createCatInfo(newCatInfo)
    res.json({
        message: "Add info successful",
        result: result
    })
}

export const catInfo = async(req, res)=>{
    const catName = req.body.catName
    console.log('catName', catName)
    const catDetail = await getCatInfo(catName)
    res.json({catDetail})
}

// export const RoomType = async(req, res)=>{
//     const roomId = req.roomType
// }