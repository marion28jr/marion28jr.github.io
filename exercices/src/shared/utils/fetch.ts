/**
 * La gestion d'erreur
 * @param response la réponse
 */
export function handleFetchResponse(response : Response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Bad request');
    }
}