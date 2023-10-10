
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"


let pokemon = "Pikachu"
let xp = 0.999;

if (xp < 1.000)
{
    console.log("O herói " + pokemon + " está no nível de Ferro");
}
else
{
    if (xp > 1.000 && xp <= 2.000)
    {
        console.log("O herói " + pokemon + " está no nível de Bronze");
    }
    else
    {
        if(xp > 2.000 && xp <= 5.000)
        {
            console.log("O herói " + pokemon + " está no nível de Prata");
        }
        else
        {
            if(xp > 5.000 && xp <= 7.000)
            {
                console.log("O herói " + pokemon + " está no nível de Ouro");
            }
            else
            {
                if(xp > 7.000 && xp <= 8.000)
                {
                    console.log("O herói " + pokemon + " está no nível de Platina");
                }
                else
                {
                    if(xp > 8.000 && xp <= 9.000)
                    {
                        console.log("O herói " + pokemon + " está no nível de Ascendente");
                    }
                    else
                    {
                        if(xp > 9.000 && xp <= 10.000)
                        {
                            console.log("O herói " + pokemon + " está no nível de irmotal");
                        }
                        else
                        {
                            if(xp >= 10.001)
                            {
                                console.log("O herói " + pokemon + " está no nível de Radiante")
                            }
                        
                        }
                    }
                }
            }
        }
    }

}



