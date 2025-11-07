import createHttpError from "http-errors";
import { getAllSettings, updateSettingByKey } from "../Services/setting.service.js";

// Allowe admin, user see settings
export const getSettings = async (req, res, next) => {
    try {
        const settings = await getAllSettings()

        if (!settings || settings.length === 0) {
            return next(createHttpError(404, 'Settings data not found.'))
        }

        res.json({
            message: "Settings retrieved successfully",
            settings: settings
        })

    } catch (error) {
        next(createHttpError(500, "Failed to retrieve settings."))
    }
}

//Allowe admin, user to update setting
export const updateSettings = async (req, res, next) => {
    // ดึง key และ value จาก req.body
    const { keyName, keyValue } = req.body; 

    // 🔴 ตรวจสอบ Input ขั้นพื้นฐาน
    if (!keyName || keyValue === undefined) {
        return next(createHttpError(400, "keyName and keyValue are required."))
    }
    
    try {
        const updatedSetting = await updateSettingByKey(keyName, keyValue);

        if (!updatedSetting) {
            // ไม่พบ keyName ที่ต้องการอัปเดต
            return next(createHttpError(404, `Setting key: ${keyName} not found.`))
        }

        res.json({
            message: `Setting for '${keyName}' updated successfully`,
            setting: updatedSetting
        });

    } catch (error) {
        console.error(error);
        next(createHttpError(500, "Failed to update setting."))
    }
}


