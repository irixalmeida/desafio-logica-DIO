let nomeDoHeroi = "Enzo"
let xpDoHeroi = 5000



switch (true) {
    case xpDoHeroi < 1001:
        nivel = "Ferro";
        break;

    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
        nivel = "Bronze";
        break

    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
         nivel = "Prata";
         break

    case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
         nivel = "Ouro";
         break
        
    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
        nivel = "Platina";
        break

    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
        nivel = "Ascendente";
        break

    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
        nivel = "Imortal";
        break

    case xpDoHeroi >= 10001:
        nivel = "Radiante";
        break
}


console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel} `);

// Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"