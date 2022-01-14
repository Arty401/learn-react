import {IPhoneNumberFormValues, PhoneNumberRecord} from "../ts";
import {v4} from "uuid";

export async function fetchPhones() {
    const phones = await fetch('/phones.json').then<PhoneNumberRecord[]>(r => r.json());
    return phones.sort((a, b) => a.name.first > b.name.first ? 1 : -1);
}

export async function fetchPhone(id: string) {
    const data = await fetchPhones();
    return data.find(phone => phone.id === id);
}

export async function createPhone(data: IPhoneNumberFormValues): Promise<PhoneNumberRecord> {
    return {
        ...data,
        id: v4(),
        registered: new Date().toISOString()
    };
}