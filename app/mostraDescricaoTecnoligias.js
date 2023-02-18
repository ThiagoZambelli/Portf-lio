(()=>{
    
    const icones = document.querySelectorAll("[data-icones-tecnologias]");
    
    esconderConteudo = () => {
        const descricoes = document.querySelectorAll("[data-tecnologias-descricao]");

        descricoes.forEach(descricoes => descricoes.classList.add('hide'));
        descricoes.forEach(descricoes => descricoes.classList.remove('flex__container'));
    }

    ativarConteudo = (valor) =>{
        const descricao = document.querySelector(`[data-tecnologias-descricao=${valor}]`);
        esconderConteudo();
        descricao.classList.remove('hide')
        descricao.classList.add('flex__container')
    }    
    icones.forEach(e => {
        e.addEventListener("click", ()=>{
               const valor = e.dataset.iconesTecnologias;  
                         ativarConteudo(valor); 


        })
    })
})()