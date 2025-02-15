const API_DOMAIN = "http://localhost:3000/company";
const API_CANDIDATE = "http://localhost:3000/cv";

export const get = async (path) => {
    const response = await fetch(API_DOMAIN + path);
    const result = await response.json();
    return result;
}
export const get4can = async (path) => {
    const response = await fetch(API_CANDIDATE + path);
    const result = await response.json();
    return result;
}
export const post = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });

    const result = await response.json();
    return result;
};
export const update = async (id, data) => {
    const response = await fetch(`${API_DOMAIN}/${id}`, {
        method: "PATCH", // hoặc "PATCH" nếu chỉ cập nhật một phần dữ liệu
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
};
