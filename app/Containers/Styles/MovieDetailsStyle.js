import { Colors } from '../../Themes';

export default StyleSheet = {
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.background
  },
  backgrondImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
  },
  backgroundImageOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  overview: {
    fontSize: 18,
    color: '#ffffff',
    padding: 10
  },
  date: {
    fontSize: 14,
    color: '#ffffff',
    paddingLeft: 10,
  },
};
