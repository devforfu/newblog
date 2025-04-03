import {json} from "@sveltejs/kit";

export async function GET() {
    return json({
        firstName: "Ilia",
        lastName: "Zaitsev",
        emailDomain: "outlook",
    });
}