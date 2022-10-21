import api from "../api";


export async function pegarRepositoriosDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id) {
    try {
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'Sucesso';
    }
    catch (error) {
        console.log(error);
        return 'Um deu ruim';
    }
}

export async function pegarRepositoriosDoUsuarioPeloNome(postId, name) {

    const resultado = await api.put(`/repos?postId=${postId}&name=${name}`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error)
        return []
    });
    return resultado;


}

export async function criarRepositoriosDoUsuario(postId, nome, data) {
    try {
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId,
        });
        return 'Sucesso';
    }
    catch (error) {
        console.log(error);
        return 'Um deu ruim';
    }

}

export async function deletarRepositoriosDoUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);
        return 'Sucesso'
    }
    catch (error) {
        console.log(error);
        return 'Um deu ruim'
    }

}