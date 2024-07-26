// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { randomIntFromInterval } from "./createTransactions";

export default function handler(req, res) {
    const x = req.body;
    console.log(x);
    const transactions = x.referenceIds.map(txn => {
        return {
            referenceId: txn,
            transactionId: txn + '_' + randomIntFromInterval(1, 1000),
            status: 'completed',
        }
    })
    const r = Math.random();
    if (r < 1) {
        res.status(200).json({
            status: "success",
            data: {
                transactions,
            }
        })
    } else if (r > 0.95) {
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