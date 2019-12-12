import * as React from 'react';
// import { Menu as MenuIcon } from '@material-ui/icons';
import { IconButton, Box, Button, MenuItem, Menu } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from 'constants/styles';
import { useRouter } from 'components/HOC/CustomRouter';
import { IUserInfo } from 'interface/user.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: HEADER_HEIGHT,
      width: '100%',
      boxShadow: '0px 3px 3px 0px rgba(207,207,207,1)',
      padding: '0 32px 0 23px ',
      position: 'fixed',
      top: 0,
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: '#fff',
      boxSizing: 'border-box'
    },
    menuBtn: {
      height: '39px',
      width: '39px',
      color: '#000000'
    },
    avatar: {
      height: '100%',
      width: '100%',
      borderRadius: '50%'
    },
    btn: {
      marginRight: '10px'
    },
    name_email: {
      paddingLeft: 16,
      display: 'flex',
      flexDirection: 'column'
    },
    name: {
      width: '166px',
      fontSize: 14,
      color: '#000',
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    email: {
      fontSize: 12,
      color: '#4285f4',
      width: '166px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  })
);

interface Props {
  hanleMenu: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  userInfo: IUserInfo | null;
  logout: () => void;
}

export const LayoutHeader: React.SFC<Props> = ({ hanleMenu, userInfo, logout }) => {
  const classes = useStyles();
  // const router = useRouter();
  return (
    <header className={classes.header}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" height="60px">
          {/* <IconButton size="small" className={classes.menuBtn} onClick={hanleMenu}>
            <MenuIcon />
          </IconButton> */}

          <Box component="div" mt="15px" mb="16px" ml="11px" fontSize="24px" fontWeight="400">
            {/* <span className="helvetica pointer">CoStar</span> */}
            <img src={''} alt="logo" style={{ height: 34 }} />
          </Box>
        </Box>
        {userInfo ? (
          <Logined userInfo={userInfo!} logout={logout} />
        ) : window.location.hash === '#/login' ? (
          ''
        ) : (
          <NoLogin />
        )}
      </Box>
    </header>
  );
};

const Logined: React.SFC<{ userInfo: IUserInfo; logout: () => void }> = ({ userInfo, logout }) => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  // 切换avatar下拉菜单
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // action前关闭菜单
  const closeMenuDecorator = (func: Function): (() => void) => {
    return () => {
      setAnchorEl(null);
      func();
    };
  };

  return (
    <Box>
      <IconButton size="small" onClick={handleAvatarClick}>
        <Box borderRadius="50%" width="32px" height="32px">
          <img className={classes.avatar} src={/*userInfo.avatar ||*/ ''} alt="avatar" />
        </Box>
        <span>{userInfo.userName}</span>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        style={{ width: '100%' }}
      >
        <MenuItem
          style={{ textAlign: 'right' }}
          onClick={closeMenuDecorator(() => {
            logout();
            router.history.push('/login');
          })}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

const useStylesNoLogin = makeStyles(() =>
  createStyles({
    signInLogin: {
      borderColor: '#4285F4',
      color: '#4285F4',
      transition: '0.25s ease',
      '&:hover': {
        backgroundColor: '#4285F4',
        color: '#fff'
      },
      textTransform: 'none'
    }
  })
);

const NoLogin: React.SFC = () => {
  const router = useRouter();
  const classes = useStylesNoLogin();
  return (
    <Button
      className={classes.signInLogin}
      variant="outlined"
      onClick={() => {
        router.history.push('/login');
      }}
    >
      Sign in
    </Button>
  );
};
