import { redirect } from "react-router-dom"

export async function requiredAuth() {
    const isLoggedIn = false

    if (!isLoggedIn) {
        redirect("login");
    }
}