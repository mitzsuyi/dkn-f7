import { lifecycle} from 'recompose'

const withFetcher = (getRequest, onSuccess) => lifecycle({
  componentDidMount() {
    getRequest(this.props).then((result)=>onSuccess(result, this.props))
  }
})

export default withFetcher