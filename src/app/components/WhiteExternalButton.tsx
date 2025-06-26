import React from "react";
import icons from "../icons";

export default function WhiteExternalButton({ text, bordered = false }: { text: string, bordered?: boolean }) {
    return (
        <button className={`${bordered === true && "border"} px-8 py-3 rounded-lg bg-white hover:bg-slate-200 duration-300 hover:cursor-pointer text-black font-bold text-lg uppercase flex items-end gap-x-2`}>
            <span>{text}</span>
            <span className="fill-orange-600">{icons.externalLink}</span>
        </button>
    );
}
