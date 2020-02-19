import {
  Phone as PhoneInTalk,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Home as HomeIcon,
} from '@material-ui/icons'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Box, Typography, Theme, Grid, Link } from '@material-ui/core'
// import Link from '../../src/Link'
import { FunctionComponent } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginTop: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 23,
    },

    icons: {
      textAlign: 'center',
    },
    iconText: {
      verticalAlign: 'top',
      display: 'block',
    },
  })
)

interface PhoneProps {
  tel: string
}

const Phone: FunctionComponent<PhoneProps> = ({ tel }) => {
  const classes = useStyles()
  return (
    <Link href={`tel:${tel}`}>
      <PhoneInTalk />
      <Typography className={classes.iconText} component="span">
        {tel}
      </Typography>
    </Link>
  )
}

interface EmailProps {
  address: string
}

const Email: FunctionComponent<EmailProps> = ({ address }) => {
  const classes = useStyles()
  return (
    <Link href={`mailto:${address}`}>
      <EmailIcon />
      <Typography className={classes.iconText} component="span">
        {address}
      </Typography>
    </Link>
  )
}

const GitHub: FunctionComponent<{ name: string }> = ({ name }) => {
  const classes = useStyles()

  return (
    <Link href={`https://github.com/${name}`}>
      <GitHubIcon />
      <Typography className={classes.iconText} component="span">
        {name}
      </Typography>
    </Link>
  )
}

const Home = () => {
  const classes = useStyles()
  return (
    <Link href="https://fox.mn">
      <HomeIcon />
      <Typography className={classes.iconText} component="span">
        fox.mn
      </Typography>
    </Link>
  )
}

export default () => {
  const classes = useStyles()

  return (
    <Box className={classes.header}>
      <Typography className={classes.title} component="h1">
        刘斌的简历
      </Typography>

      <Grid className={classes.icons} container spacing={3}>
        <Grid item xs={3}>
          <Home />
        </Grid>
        <Grid item xs={3}>
          <Phone tel={process.env.TEL as string} />
        </Grid>
        <Grid item xs={3}>
          <Email address="i@fox.mn" />
        </Grid>
        <Grid item xs={3}>
          <GitHub name="foxundermoon"> </GitHub>
        </Grid>
      </Grid>
    </Box>
  )
}
