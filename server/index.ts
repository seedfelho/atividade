import express, { Request,Response } from 'express';
import mysql2 from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());


app.get('/pessoas',async (req:Request,res:Response) =>{
    let banco = await mysql2.createConnection({
        host:"localhost",
        user:"test",
        password:"test",
        database:"test"
    })
    let query = "SELECT * FROM pessoas";
    let [resultado, _ ] = await banco.query(query);
    res.send(resultado);
});

app.post('/pessoas',async (req:Request,res:Response) =>{
    let banco = await mysql2.createConnection({
        host:"localhost",
        user:"test",
        password:"test",
        database:"test"
    })
    //console.log(req.body.id,req.body.nome,req.body.idade);
    let query = "INSERT INTO pessoas (id, nome, idade) VALUES (?, ?, ?)";
    let resultado = await banco.query(query, [req.body.id,req.body.nome,req.body.idade]);
    res.send({mensagem:"Cadastrado"});//resultado[0]
    //ou let [data, _] = await banco.query(query);res.send(data);
});


//atividade 
app.get('/materias',async (req:Request,res:Response) =>{
    let banco = await mysql2.createConnection({
        host:"localhost",
        user:"test",
        password:"test",
        database:"test"
    })
    let query = "SELECT * FROM materias";
    let [resultado, _ ] = await banco.query(query);
    res.send(resultado);
});

app.post('/materias',async (req:Request,res:Response) =>{
    let banco = await mysql2.createConnection({
        host:"localhost",
        user:"test",
        password:"test",
        database:"test"
    })
    //console.log(req.body.id,req.body.nome,req.body.idade);
    let query = "INSERT INTO materias (id, nome, cargaHoraria, curso) VALUES (?, ?, ?, ?)";
    let resultado = await banco.query(query, [req.body.id,req.body.nome,req.body.cargaHoraria,req.body.curso]);
    res.send({mensagem:"Cadastrado"});//resultado[0]
    //ou let [data, _] = await banco.query(query);res.send(data);
});

app.get('/', (req:Request, res:Response) => {
    res.send('hello word!');
    }
);



app.listen(3000, () => {
    console.log('Server started on port 3000');
    }
);