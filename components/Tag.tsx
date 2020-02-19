import { Typography, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { FunctionComponent } from 'react'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      margin: '0.2em',
      backgroundColor: 'blue' ,
      color: '#00B4F1',
      display: 'inline-box',
      fontWeight: 600,
      fontSize: '2em',
      transformStyle: 'preserve-3d',
      perspective: 200,


      '& before , & after':{
        
      }

    },
  })
)

export const Tag: FunctionComponent = ({ children }) => {
  const classes = useStyles()
  return <Typography  className={classes.tag} component="span">{children}</Typography>
}
