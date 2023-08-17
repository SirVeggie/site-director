
export async function GET(e) {
    const id = decodeURIComponent(e.params.id);
    const display = e.url.searchParams.get("display") === "fullscreen" ? "fullscreen" : "standalone";

    const body = {
        "name": id,
        "short_name": id,
        "icons": [],
        "display": display,
        "background_color": "#242424",
        "theme_color": "#242424"
    };
    return new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } });
}