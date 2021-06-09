import axios from "axios";

//  ლისტი მთავარ გვერდზე
export const fetchEmployee = search  => {
    const url = `/Employee/ListGet?name=${search.EmployeeName}`;
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {                
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.status);
            })
    })
}

export const fetchGender = () => {
    const url = `/Gender/ListGet`;
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response.data.data);
            })
            .catch(error => {
                reject(error.response.status);
            })
    })
}

export const addEmployee = data => {
    const url = `/Employee/Post`;
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.status);
            })
    })
}

export const deleteEmployee = ID => {
    const url = `/Employee/Delete?ID=${ID}`;
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error.response.status);
            })
    })
}