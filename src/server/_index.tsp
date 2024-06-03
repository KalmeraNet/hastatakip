export type GetUserInputParam = { id: string }
export type GetUserOutputParam = { id: string, fullName: string, role: string, initial: string }

export const getServerUser: (input: GetUserInputParam) => Promise<GetUserOutputParam> = async (input) => {
    return new Promise<GetUserOutputParam>((resolve, reject) => {
        // fetch('http://localhost:7400/v1/getServerUserX')
        //     .then(e => {
        //         console.log(e)
        //     })
        //     .catch(e => {
        //         console.log(e)
        //     })
        fetch('http://localhost:7400/v1/getServerUser', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "accept": "application/json" },
            body: JSON.stringify(input)
        })
            .then(async res => {
                resolve(await res.json() as GetUserOutputParam);
            })
            .catch(e => {
                console.log('ERROR')
            });
    });
}

//Masraf
export type GetProjectsInputParam = { userId: string }
export type GetProjectsOutputParam = { id: number, name: string, title: string }


export const getProjects: (input: GetProjectsInputParam) => Promise<GetProjectsOutputParam[]> = async ({ userId }) => {
    return [
        {
            id: 1,
            name: "Andre",
            title: "Admin",
        },
        {
            id: 2,
            name: "Ahmet",
            title: "Lorem ipsum dolor sit amet ",
        },
        {
            id: 3,
            name: "Samet",
            title: "Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur",
        },
    ]
}


export type GetLocationsInputParam = { userId: string, projectId: number }
export type GetLocationsOutputParam = { id: number, name: string, title: string }


export const getLocations: (input: GetLocationsInputParam) => Promise<GetLocationsOutputParam[]> = async ({ userId }) => {
    return [
        {
            id: 1,
            name: "Cerrah paşa",
            title: "ipsum dolor sit ame",
        },
        {
            id: 2,
            name: "Acıbadem",
            title: "Lorem ipsum dolor sit amet ",
        },
        {
            id: 3,
            name: "Gata",
            title: "Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur",
        },
    ]
}

export type GetFormsInputParam = { userId: string, formsId: number }
export type GetFormsOutputParam = { id: number, name: string, title: string }


export const getForms: (input: GetFormsInputParam) => Promise<GetFormsOutputParam[]> = async ({ userId }) => {
    return [
        {
            id: 1,
            name: "Andre",
            title: "Admin",
        },
        {
            id: 2,
            name: "Ahmet",
            title: "Lorem ipsum dolor sit amet ",
        },
        {
            id: 3,
            name: "Samet",
            title: "Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit amet consectetur",
        },
    ]
}

export type GetListInputParam = { userId: string }
export type GetListOutputParam = { id: number, name: string, title: string, tip: string, price: number, date: string, po: string }


export const getList: (input: GetListInputParam) => Promise<GetListOutputParam[]> = async ({ userId }) => {
    return [
        {
            id: 1,
            name: "npDrPcI",
            title: "Cerrah paşa",
            tip: "Faz-3",
            price: 950.00,
            date: "12/12/2024",
            po: "masraf tipi"
        },
        {
            id: 2,
            name: "tFGsBWo",
            title: "Acıbadem",
            tip: "Faz-3",
            price: 950.00,
            date: "12/12/2024",
            po: "masraf tipi"
        },
        {
            id: 3,
            name: "lSGVBAo",
            title: "Gata",
            tip: "Faz-3",
            price: 950.00,
            date: "12/12/2024",
            po: "masraf tipi"
        },
    ]
}

export type GetFormInputParam = { userId: string, formId: number }
export type GetFormOutputParam = { id: number, name: string, title: string, tip: string, price: number, date: string, po: string }

export const getForm: (input: GetFormInputParam) => Promise<GetFormOutputParam> = async ({ userId, formId }) => {
    return new Promise<GetFormOutputParam>((resolve, reject) => {
        // fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({

        //         username: 'kminchelle',
        //         password: '0lelplR',
        //         expiresInMins: 30, // optional, defaults to 60
        //     })
        // })
        //     .then(async res => {
        //         var vl = await res.json();
        //         resolve({ id: formId, name: vl.name as string, title: vl.firstName[0] + vl.lastName[0], tip: vl.gender as string, po: vl.lastName + vl.firstNameName + vl.gender, price: 100, date: vl.created });
        //     })
        //     .catch(e => {
        //         console.log('ERROR')
        //     });
        resolve({
            id: 1,
            name: "npDrPcI",
            title: "Cerrah paşa",
            tip: "Faz-3",
            price: 950.00,
            date: "12/12/2024",
            po: "masraf tipi"
        },
        );
        // {
        //     id: 2,
        //     name: "tFGsBWo",
        //     title: "Acıbadem",
        //     tip: "Faz-3",
        //     price: 950.00,
        //     date: "12/12/2024",
        //     po: "masraf tipi"
        // },
        // {
        //     id: 3,
        //     name: "lSGVBAo",
        //     title: "Gata",
        //     tip: "Faz-3",
        //     price: 950.00,
        //     date: "12/12/2024",
        //     po: "masraf tipi"
        // },
    });


}