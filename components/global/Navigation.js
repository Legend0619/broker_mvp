import React from "react";
import { Flex, Container } from "@chakra-ui/react";
import NextLink from "next/link";

function Navigation(props) {
  return (
    <Container as="nav" maxW={"container.full"} sx={{ top: ["", "", 0] }}>
      <NextLink href="/">
        <a>
          <Flex py={[0, "", 3]} title="CGU Logo" width={["136px", "", "225px"]}>
            <svg
              width="225"
              height="66"
              viewBox="0 0 225 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="7.64563"
                y="19.8"
                width="50.2427"
                height="25.85"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M76.4059 38.8543V26.163H78.6128V38.8543H76.4059ZM86.2878 29.3741C88.282 29.3741 89.7411 30.5278 89.7411 33.2196V38.8543H87.6491V33.6041C87.6491 31.8933 86.9195 31.3544 85.788 31.3544C85.0401 31.3544 84.2727 31.5663 83.4283 32.1051V38.8543H81.3363V29.5664H83.4283V30.3355C84.291 29.7011 85.1941 29.3741 86.2878 29.3741ZM96.033 33.3932C97.3002 33.6431 98.5661 34.1819 98.5661 36.0079C98.5661 37.9123 97.1266 39.0463 94.69 39.0463C93.2896 39.0463 92.2534 38.701 91.6583 38.3164V36.3741C92.2717 36.777 93.2896 37.1432 94.613 37.1432C95.7262 37.1432 96.3971 36.8162 96.3971 36.1818C96.3971 35.2964 95.169 35.2964 93.9605 34.989C92.7703 34.6816 91.5422 34.0656 91.5422 32.2776C91.5422 30.5079 92.9242 29.3739 95.2081 29.3739C96.589 29.3739 97.5103 29.7584 98.0676 30.1246V32.0657C97.4908 31.6628 96.5706 31.277 95.3413 31.277C94.3442 31.277 93.7112 31.5856 93.7112 32.2396C93.7112 33.0479 94.8049 33.1054 96.033 33.3932ZM106.125 36.336V29.5672H108.236V38.8552H106.125V38.1057C105.319 38.7204 104.474 39.0474 103.458 39.0474C101.578 39.0474 100.196 37.9122 100.196 35.2203V29.566H102.307V34.8358C102.307 36.5271 102.939 37.0855 103.977 37.0855C104.667 37.0855 105.358 36.8344 106.125 36.336ZM112.859 29.567V30.4512C113.915 29.7789 115.028 29.3747 116.102 29.3747V31.4897C115.008 31.4897 113.915 31.7396 112.859 32.336V38.8549H110.768V29.567H112.859ZM117.713 38.8555V29.5676H119.803V38.8555H117.713ZM118.749 25.2405C119.516 25.2405 120.092 25.8369 120.092 26.5864C120.092 27.3555 119.516 27.9519 118.749 27.9519C118.001 27.9519 117.425 27.3555 117.425 26.5864C117.425 25.8369 118.001 25.2405 118.749 25.2405ZM127.286 29.3747C129.282 29.3747 130.741 30.5284 130.741 33.2202V38.8549H128.65V33.6047C128.65 31.8939 127.92 31.355 126.788 31.355C126.04 31.355 125.272 31.5669 124.428 32.1057V38.8549H122.337V29.567H124.428V30.3361C125.291 29.7017 126.194 29.3747 127.286 29.3747ZM139.796 35.9128V32.2975C138.952 31.6056 138.203 31.3558 137.397 31.3558C135.689 31.3558 134.596 32.4506 134.596 34.1051C134.596 35.7584 135.689 36.8545 137.397 36.8545C138.203 36.8545 138.952 36.6047 139.796 35.9128ZM139.796 30.2976V29.5677H141.908L141.906 38.4895C141.906 40.8739 140.103 42.7011 136.803 42.7011C135.325 42.7011 134.116 42.297 133.426 41.8549V39.9125C134.116 40.3938 135.344 40.7404 136.63 40.7404C138.702 40.7404 139.796 39.8929 139.796 38.4895V37.9126C138.99 38.547 138.088 38.8361 137.051 38.8361C134.403 38.8361 132.408 36.8545 132.408 34.1051C132.408 31.3362 134.403 29.3742 137.051 29.3742C138.088 29.3742 138.99 29.6633 139.796 30.2976ZM152.151 34.7401H156.104L154.127 29.8561L152.151 34.7401ZM153.59 26.1638H154.741L160.248 38.855H157.753L156.852 36.6053H151.383L150.481 38.855H148.064L153.59 26.1638ZM172.335 29.3747C174.178 29.3747 175.559 30.5284 175.559 33.2202V38.8549H173.448V33.6047C173.448 31.8939 172.834 31.3562 171.817 31.3562C171.126 31.3562 170.417 31.6244 169.61 32.1633C169.669 32.4903 169.687 32.8369 169.687 33.2202V38.8549H167.596V33.6047C167.596 31.8939 166.983 31.3562 165.965 31.3562C165.274 31.3562 164.604 31.6049 163.835 32.1057V38.8549H161.744V29.567H163.835V30.3165C164.622 29.7213 165.466 29.3747 166.483 29.3747C167.615 29.3747 168.555 29.7985 169.131 30.7586C170.09 29.894 171.069 29.3747 172.335 29.3747ZM182.408 37.0859C184.154 37.0859 185.248 35.9322 185.248 34.2201C185.248 32.4909 184.154 31.3556 182.408 31.3556C181.602 31.3556 180.872 31.6055 180.029 32.2974V36.1441C180.872 36.836 181.602 37.0859 182.408 37.0859ZM182.753 29.3753C185.42 29.3753 187.416 31.3936 187.416 34.2201C187.416 37.0479 185.42 39.0478 182.753 39.0478C181.756 39.0478 180.834 38.7784 180.029 38.1428V38.8555H177.937V25.3939H180.029V30.2975C180.834 29.6631 181.756 29.3753 182.753 29.3753ZM190.292 25.2405C191.059 25.2405 191.635 25.8369 191.635 26.5864C191.635 27.3567 191.059 27.9519 190.292 27.9519C189.544 27.9519 188.969 27.3567 188.969 26.5864C188.969 25.8369 189.544 25.2405 190.292 25.2405ZM189.256 38.8555V29.5676H191.348V38.8555H189.256ZM196.298 28.0288V29.567H199.252V31.3746H196.298V35.5667C196.298 36.6444 196.757 37.0865 197.775 37.0865C198.275 37.0865 198.772 36.9701 199.252 36.7779V38.7398C198.772 38.8941 198.082 39.0472 197.43 39.0472C195.473 39.0472 194.187 37.9511 194.187 35.6818V31.3746H192.959V30.3557L195.301 28.0288H196.298ZM202.072 25.2405C202.839 25.2405 203.416 25.8369 203.416 26.5864C203.416 27.3567 202.839 27.9519 202.072 27.9519C201.324 27.9519 200.748 27.3567 200.748 26.5864C200.748 25.8369 201.324 25.2405 202.072 25.2405ZM201.036 38.8555V29.5676H203.128V38.8555H201.036ZM209.862 37.0859C211.531 37.0859 212.625 35.9322 212.625 34.2201C212.625 32.4897 211.531 31.3556 209.862 31.3556C208.193 31.3556 207.119 32.4897 207.119 34.2201C207.119 35.9322 208.193 37.0859 209.862 37.0859ZM209.862 29.3753C212.761 29.3753 214.774 31.3936 214.774 34.2201C214.774 37.0479 212.759 39.0478 209.862 39.0478C206.965 39.0478 204.95 37.0479 204.95 34.2201C204.95 31.3936 206.965 29.3753 209.862 29.3753ZM221.547 29.3747C223.542 29.3747 225 30.5284 225 33.2202V38.8549H222.909V33.6047C222.909 31.8939 222.18 31.3562 221.048 31.3562C220.3 31.3562 219.532 31.5669 218.687 32.1057V38.8549H216.596V29.567H218.687V30.3361C219.551 29.7017 220.453 29.3747 221.547 29.3747ZM54.9169 34.5027V24.8302H50.977V34.5027C50.977 36.4621 49.8436 37.7774 48.095 37.7774C46.3463 37.7774 45.2142 36.4621 45.2142 34.5027V24.8302H41.2731V34.5027C41.2731 38.7437 44.1551 41.4478 48.095 41.4478C52.0106 41.4478 54.9169 38.7437 54.9169 34.5027ZM32.542 41.4466C35.0774 41.4441 37.4171 40.4974 38.7194 38.7853L38.7109 31.3687L32.3086 31.3773L32.3122 35.0476L34.7746 35.0452L34.7771 37.4015C34.163 37.6746 33.5465 37.775 32.9068 37.7762C30.0249 37.7799 28.2495 35.8719 28.247 33.0196C28.2434 30.1673 30.0139 28.2544 33.1415 28.2507C34.8646 28.2495 36.9355 28.8422 38.1418 29.5109L38.1382 25.7904C36.8565 25.1217 35.058 24.5779 32.9652 24.5804C27.5223 24.5877 24.1527 28.1625 24.1587 33.0245C24.1648 37.8852 27.5417 41.4527 32.542 41.4466ZM22.3128 29.3933V25.674C21.475 25.1278 20.0462 24.5816 18.1516 24.5816C13.1513 24.5816 9.82669 28.1528 9.82669 33.0147C9.82669 37.8754 13.1513 41.4478 18.1516 41.4478C20.0462 41.4478 21.475 40.9028 22.3128 40.3554V36.6361C21.4507 37.2557 19.899 37.7774 18.4459 37.7774C15.6381 37.7774 13.915 35.867 13.915 33.0147C13.915 30.1624 15.6393 28.2519 18.4459 28.2519C19.899 28.2519 21.4507 28.7737 22.3128 29.3933ZM32.7035 0C50.7641 0 65.407 14.7757 65.407 33C65.407 51.2256 50.7641 66 32.7035 66C14.6417 66 0 51.2256 0 33C0 14.7757 14.6417 0 32.7035 0Z"
                fill="#00AD20"
              />
            </svg>
          </Flex>
        </a>
      </NextLink>
    </Container>
  );
}

export default Navigation;
