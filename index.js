const customExpress = require('./config/customExpress')
const app = customExpress()
const conexao = require('./infrestrutura/conexao')
const Tabelas = require('./infrestrutura/tabelas')
conexao.connect((erro)=>{
  if(erro){
    console.log(erro)
  }else{
    console.log('conectado com o banco')
    Tabelas.init(conexao)


    app.listen(3000,() => console.log('servidor esta rodando'))
  }
})


app.get('/',(req,res)=> res.send('Esta rodando'))