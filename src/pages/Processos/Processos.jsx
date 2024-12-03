import processos from "../../mocks/processos.json"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import styles from "./style.module.css"

export default function Processos(){
    return(
        <div className={styles.container}>
            <h2>Processos</h2>
            <div className={styles.container_cards}>
                {processos.map((processo) => (
                    <Card  key={processo.numero}>
                        <CardHeader action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <div className={styles.card_processo}>
                            <div>
                                <Typography className={styles.title_atribute}>
                                    Número
                                </Typography>
                                <Typography>
                                    {processo.numero}
                                </Typography>
                            </div>
                            <div>
                                <Typography className={styles.title_atribute}>
                                    Cliente
                                </Typography>
                                <Typography>
                                    {processo.cliente.nome}
                                </Typography>
                            </div>
                            <div>
                                <Typography className={styles.title_atribute}>
                                    Data Status
                                </Typography>
                                <Typography>
                                    {processo.dataStatus}
                                </Typography>
                            </div>
                            <div>
                                <Typography className={styles.title_atribute}>
                                    N° Processo
                                </Typography>
                                <Typography>
                                    {processo.codProcesso}
                                </Typography>
                            </div>
                            <div>
                                <Typography className={styles.title_atribute}>
                                    Ação
                                </Typography>
                                <Typography>
                                    {processo.acao}
                                </Typography>
                            </div>
                            <div>
                                <Typography className={styles.title_atribute}>
                                    Status
                                </Typography>
                                <Typography>
                                    {processo.status}
                                </Typography>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
        
        
    )
}