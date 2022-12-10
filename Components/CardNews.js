class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card" );

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left" );

        const autor= document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right" );

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/assets/img/defoult.png"
        newsImage.alt = "Foto da Noticia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 90%;
                box-shadow: 10px 11px 29px -4px rgba(0,0,0,0.68);
                -webkit-box-shadow: 10px 11px 29px -4px rgba(0,0,0,0.68);
                -moz-box-shadow: 10px 11px 29px -4px rgba(0,0,0,0.68);;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left, .card_right{
                border-left: 1px solid #0725cf;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 20px;
            }
            
            
            
            .card_left> span{
                font-weight:400;
            }
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color:black;
                text-decoration: none;
                font-weight:bold;
            }
            
            .card_left > p {
                color: rgb(150, 148, 148)
            }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);
