import { Typography, Theme, Box } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { FunctionComponent } from 'react'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      margin: '0.2em',
      backgroundColor: 'blue',
      color: '#00B4F1',
      display: 'inline-box',
      fontWeight: 600,
      fontSize: '2em',
      transformStyle: 'preserve-3d',
      perspective: 200,

      '& before , & after': {},
    },
    job: {
      boxShadow:
        '0 4px 10px 0 rgba(0, 0, 0,.14), 0 7px 8px -5px rgba(255, 152, 0,.4)',
      backgroundImage:
        'linear-gradient(60deg, rgba(255, 167, 38,.2), rgba(251, 140, 0,.2))',
      backgroundPositionX: 'initial',
      backgroundPositionY: 'initial',
      color: 'green',
      padding: '2px 4px 2px 4px',
    },
    hobby: {
      boxShadow:
        '0 4px 10px 0 rgba(0, 0, 0,.14), 0 7px 8px -5px rgba(255, 152, 0,.4)',
      backgroundImage:
        'linear-gradient(60deg, rgba(255, 167, 38,.2), rgba(251, 140, 0,.2))',
      backgroundPositionX: 'initial',
      backgroundPositionY: 'initial',
      padding: '20px 20px 20px 20px',
      margin: '20px 20px 20px 20px',
    },
  })
)

export const Tag: FunctionComponent = ({ children }) => {
  const classes = useStyles()
  return (
    <Typography className={classes.tag} component="span">
      {children}
    </Typography>
  )
}

export const T: FunctionComponent = ({ children }) => {
  const clasees = useStyles()
  return (
    <Typography className={clasees.job} component="span">
      {children}
    </Typography>
  )
}

export const R: FunctionComponent<{ v: number }> = ({ children, v }) => {
  return (
    <Rating
      name="read-only"
      value={v}
      readOnly
      precision={0.5}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
    />
  )
}

export const Ht: FunctionComponent = ({ children }) => {
  const classes = useStyles()
  return (
    <Box boxShadow={1} bgcolor="background.paper" m={1} p={0.8}>
      <Typography  component="span">
        {children}
      </Typography>
    </Box>
  )
}
