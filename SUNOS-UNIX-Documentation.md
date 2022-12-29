# Documentation for the Sun operating system (or formerly known as Open OS X)
Sun/OS is an operating system based on FreeBSD (FuryBSD), 4.4BSD, MacOS components, and helloSystem.

## Source structure of FreeBSD

---------------
| Directory | Description |
| --------- | ----------- |
| bin | System/user commands. |
| cddl | Various commands and libraries under the Common Development and Distribution License. |
| contrib | Packages contributed by 3rd parties. |
| crypto | Cryptography stuff (see [crypto/README](crypto/README)). |
| etc | Template files for /etc. |
| gnu | Commands and libraries under the GNU General Public License (GPL) or Lesser General Public License (LGPL). Please see [gnu/COPYING](gnu/COPYING) and [gnu/COPYING.LIB](gnu/COPYING.LIB) for more information. |
| include | System include files. |
| kerberos5 | Kerberos5 (Heimdal) package. |
| lib | System libraries. |
| libexec | System daemons. |
| release | Release building Makefile & associated tools. |
| rescue | Build system for statically linked /rescue utilities. |
| sbin | System commands. |
| secure | Cryptographic libraries and commands. |
| share | Shared resources. |
| stand | Boot loader sources. |
| sys | Kernel sources. |
| sys/`arch`/conf | Kernel configuration files. GENERIC is the configuration used in release builds. NOTES contains documentation of all possible entries. |
| tests | Regression tests which can be run by Kyua.  See [tests/README](tests/README) for additional information. |
| tools | Utilities for regression testing and miscellaneous tasks. |
| usr.bin | User commands. |
| usr.sbin | System administration commands. |

FreeBSD Source Repository:
https://github.com/freebsd/freebsd-src

## About the Sun/OS v6.1 Installer
The OS X Installer (also known as the FreeBSD Installer) is a GNUstep .app bundle that installs the operating system for desktops and workstation, along with providing useful information via the Installer Log (shown on a terminal window)

Source code for Open OS X - https://github.com/moralesresearch/Utilities/tree/master/Utilities/Install%20FreeBSD.app


Source code for Open OS X Server - 
https://github.com/moralesresearch/Utilities/tree/server-master/Utilities/Install%20FreeBSD.app
