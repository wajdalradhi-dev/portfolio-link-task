export async function onRequest(context) {
    try {
        const result = await context.env.DB
            .prepare("SELECT * FROM profile LIMIT 1")
            .first();

        return Response.json(result);
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch profile data" },
            { status: 500 }
        );
    }
}