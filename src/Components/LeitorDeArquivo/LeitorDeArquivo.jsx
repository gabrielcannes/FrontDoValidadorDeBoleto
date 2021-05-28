import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import "./estilo.css";
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function LeitorDeArquivo() {
        const classes = useStyles();
        const{register, handleSubmit} = useForm();
        const [resposta,atualizaResposta]=useState(null);
        async function onSubmit(formValues) { //esperar o servidor responder, por isso async
          const [textFile] = formValues.file  //pega o arquivo 
        
          const formData = new FormData() //cria um formulario pelo js
          formData.append('file', textFile, textFile.name) //adiciona um campo com nome file, objeto do arquivo e nome do arquivo
          
          const rawResponse = await fetch('https://bank-slip-validator.herokuapp.com/validate', {
            method: 'POST',
            //mode: 'no-cors',
            body: formData
          })
          const fileResponse = await rawResponse.json()
          // console.log(fileResponse)
          atualizaResposta(fileResponse)
        }
  return (
   <form className="textoEstilo" onSubmit={handleSubmit(onSubmit)}>
     <Grid
      container
      direction="row"
      justify="center"
      alignItems="center">
        <div id='botao'>
            <input className="Button" ref={register} type="file" name="file" id="leitor"/>
            <Button 
              endIcon={<CloudUploadIcon />}
              variant="contained" 
              // color="primary"
              className={classes.button} 
              type="submit">
                Enviar
            </Button>
        </div>
        {!!resposta && (
          <div>
          {resposta.errors.header_errors.map(errors => (<p>{errors}</p>))}
          {resposta.errors.body_errors.map(errors => (<p>{errors}</p>))}
          {resposta.errors.footer_errors.map(errors => (<p>{errors}</p>))}
          {resposta.annotations.map(opcional => (<p>{opcional}</p>))}
          </div>
        )}       
      </Grid>    
   </form>
  );
}
export default LeitorDeArquivo
