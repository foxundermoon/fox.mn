import EditIcon from '@material-ui/icons/Edit'
import { Tooltip, IconButton, Link, Fab, Theme } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { FunctionComponent } from 'react'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(10),
      right: theme.spacing(6),
    },
  })
)

const EditMe: FunctionComponent<{ f: string }> = ({ f }) => {
  const classes = useStyles()
  return (
    <Tooltip title="edit me @GitHub">
      <Fab className={classes.fab}>
        <Link
          target="_blank"
          href={`https://github.com/foxundermoon/fox.mn/edit/master/${f}`}
        >
          <EditIcon />
        </Link>
      </Fab>
    </Tooltip>
  )
}

export default EditMe
