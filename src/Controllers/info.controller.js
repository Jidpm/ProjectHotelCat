import { createCatInfo, getCatInfo, getRoomDetail } from "../Services/info.service.js"
import { addCatInfoSchema } from "../Validations/Schema.js"


export const addCatInfo = async(req, res)=>{
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
    const catDetail = await getCatInfo(catName)
    res.json({catDetail})
}

export const roomType = async(req, res)=>{
    const roomId = req.params.id
    // console.log('req', roomId)
    const roomDetail = await getRoomDetail(roomId)
    console.log('roomDetail', roomDetail)
    res.json({roomDetail})
}