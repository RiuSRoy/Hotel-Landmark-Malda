// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    try {

        const x = req.body;
        // return res.status(200).json({ 
        //     status: "error",
        //     errorCode: "er_s5",
        //     "errorMessage": "UNEXPECTED_ERROR!",
        // })
        console.log(x);
        const r = Math.random();
        if (r < 1) {
    
            const d = {
                status: "success",
                updatedUserBalance: 1000,
                "merchantRefId": x.orderRefId + '_' + randomIntFromInterval(0, 1000),
            }
            res.status(200).json(d);
        } else {
            res.status(200).json({ 
                status: "error",
                errorCode: "er_w1",
                "errorMessage": "User Wallet is not active!",
            })
        } 
    } catch (e) {
            res.status(200).json({ 
                status: "error",
                errorCode: "er_s5",
                "errorMessage": "UNEXPECTED_ERROR!",
                message: e.message
            })
    }
  }
  
  /**
   * 
   status: "error",
        errorCode: "er_w3",
        "errorMessage": "Balance is insufficient!",
        */


        export function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }