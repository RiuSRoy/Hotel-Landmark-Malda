// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { randomIntFromInterval } from "./createTransactions";

export default function handler(req, res) {
    const x = req.body;
    // console.log(x);
    const orders = x.orderRefIds.map(orderRefId => {
        return {
            orderRefId: orderRefId,
            merchantRefId: orderRefId + '_' + randomIntFromInterval(1, 1000),
            status: 'success',
            message: 'Yo! done!'
        }
    })
    const r = Math.random();
    if (r < 6) {
        res.status(200).json({
            status: "success",
            orders,
        })
    } else if (r > 8) {
        res.status(200).json({
            status: "error",
            errorCode: "er_s5",
            "errorMessage": "Unexpected error!",
        })
    } else {
        res.status(200).json({
            status: "error",
            errorCode: "er_w4",
            "errorMessage": "Transaction not found!",
        })
    }
  }
  
  /**
   * 
   status: "error",
        errorCode: "er_w3",
        "errorMessage": "Balance is insufficient!",
        */