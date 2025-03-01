import bcrypt from "bcrypt";

export const HashPassword = async (password: string): Promise<string> => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (err : any) {
        throw new Error('Error hashing password');
    }
};


export const ComparePassword = async (password: string, storedPassword: string): Promise<boolean> => {
    try {
        const isMatch = await bcrypt.compare(password, storedPassword);
        return isMatch;
    } catch (err : any) {
        throw new Error('Error comparing passwords');
    }
};