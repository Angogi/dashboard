import React from 'react';
import '../assets/css/Dashboard.css';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from '../components/Navbar';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import CardGraphics from '../components/CardGraphics';
import DataTable from '../components/DataTable';

const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    container:{
        paddingTop: '40px',
        paddingLeft: '10px',
        paddingBottom: '40px',
    },
  
}));

function Dashboard(props) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing= {3}>

                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                
                <Grid item xs={12} sm={4} lg={4} xl={4}>
                    <CardsHeader 
                        title="Andres Gomez" 
                        date="September 14, 2016"
                        initialText="This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like."
                        subTitle= "Method"
                        principalContent= " Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                     
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)"
                        
                        footContent= " Set aside off of the heat to let rest for 10 minutes, and then serve."

                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={4} xl={4}>
                    <CardsHeader 
                        title="Sergio Fajardo" 
                        date="September 14, 2016"
                        initialText="This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like."
                        subTitle= "Methd"
                        principalContent= " Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                     
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)"
                        
                        footContent= " Set aside off of the heat to let rest for 10 minutes, and then serve."

                    />
                </Grid>
                <Grid item xs={12} sm={4} lg={4} xl={4}>
                    <CardsHeader 
                        title="Felipe Ruiz" 
                        date="September 14, 2016"
                        initialText="This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like."
                        subTitle= "Methd"
                        principalContent= " Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                     
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)"
                        
                        footContent= " Set aside off of the heat to let rest for 10 minutes, and then serve."

                    />
                </Grid>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards title='Clientes' text='78'/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards title='Licitaciones' text='25'/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards title='Expedientes Abiertos' text='125'/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards title='Expedientes Cerrados' text='589'/>
                    </Grid>
                </Grid>
                
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>

                </Grid>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={5} lg={5} xl={5}>
                    <CardGraphics />
                </Grid>
              
                <Grid container spacing={1} className={classes.containerTable} xs={12}>
                    <DataTable />
                </Grid>

                


            </Grid>
        </div>
    )
}

export default Dashboard

