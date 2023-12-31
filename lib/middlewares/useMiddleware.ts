import next from "@/lib/next";

const useMiddleware = async (req: Request, ...handlers: any) => {
    try {
        let request = req;
        for (let i = 0; i < handlers.length - 1; i++) {
            request = await handlers[0](request)
        }
        return await handlers[handlers.length - 1](request)
    } catch (error) {
        return next({ error })
    }
}

export default useMiddleware