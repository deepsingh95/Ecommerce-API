import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
    try {
        const setRounds = 10;
        const hashPassword = await bcrypt.hash(password, setRounds);
        return hashPassword
    } catch (error) {
        console.log(error);
    }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};