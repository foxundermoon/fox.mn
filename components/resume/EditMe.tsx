import EditIcon from '@material-ui/icons/Edit'
import { Tooltip, IconButton, Link ,Fab, Theme} from '@material-ui/core'
import {makeStyles , createStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab:{
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(6),
    }
  }),
);

export default () => {

  const classes = useStyles()
  return (
    <Tooltip title="edit me @GitHub">
      <Fab className={classes.fab} >
      <Link
        target="_blank"
        href={`https://github.com/foxundermoon/fox.mn/edit/master/pages/br.mdx`}
      >
        <EditIcon />
      </Link>

      </Fab>
    </Tooltip>
  )
}
