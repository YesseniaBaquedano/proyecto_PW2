import { vestidosData } from "./vestidosData";
import { camisasData } from "./camisasData";
import { pantalonesData } from "./pantalonesData";
import { zapatosData } from "./zapatosData";
import { ofertasData } from "./ofertasData";
import { tipsData } from "./tipsData";

export const getData = (page) => {
    console.log("Getting Context Data for page", page);
    
    // Contexto base para todas las páginas
    const contextData = {
        ...getAllPageContext()
    };
    
    // Agregar datos específicos según la página
    if (page.includes('vestidos')) {
        contextData.vestidos = vestidosData;
    }
    
    if (page.includes('camisas')) {
        contextData.camisas = camisasData;
    }
    
    if (page.includes('pantalones')) {
        contextData.pantalones = pantalonesData;
    }
    
    if (page.includes('zapatos')) {
        contextData.zapatos = zapatosData;
    }

    if (page.includes('ofertas')) {
        contextData.ofertas = ofertasData;
    }

    if (page.includes('blog')) {
        contextData.tips = tipsData;
    }
    return contextData;
}

function getAllPageContext() {
    return {
        currentYear: new Date().getFullYear().toString(),
        lastBuild: new Date().toLocaleString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
}