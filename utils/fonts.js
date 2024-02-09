import { Lora, Poppins, } from "next/font/google";

const Lora_init = Lora({
    weight: '500',
    variable: '--font-Lora',
});
const poppins_init = Poppins({
    weight: '400',
    variable: '--font-poppins-regular',
});



export const Lora = Lora_init.variable;
export const poppins = poppins_init.variable;