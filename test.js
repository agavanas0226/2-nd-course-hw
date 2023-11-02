fetch("https://wedev-api.sky.pro/api/v1/:kolesnikova-anastasiia/coments").then((responseData) => {
    return responseData;
}).then((dataResponse) => {
    console.log(dataResponse.status)
    if (dataResponse.status === 404) {
        throw new Error("Пстц!");
    } else if (dataResponse.status === 500) {
        throw new Error("!")
    }
    else {
        return dataResponse.json()
    }
}).then((respData) =>
    console.log(respData)
).catch((Error) =>
    console.log(Error, `Ошибка`)
);