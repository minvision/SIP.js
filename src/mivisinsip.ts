// export * from "./api/index.js";

// // Export grammar
// export * from "./grammar/index.js";

// // Export namespaced core
// import * as Core from "./core/index.js";
// export { Core };

// // Export namespaced web
// import * as Web from "./platform/web/index.js";
// export { Web };

import {
  Core,
  Web,
  RegistererOptions,
  RegistererUnregisterOptions,
  RegistererRegisterOptions,
  UserAgentOptions,
  Invitation,
  InvitationAcceptOptions,
  InviterInviteOptions,
  InviterOptions,
  Message
} from "../lib/index.js";
export {
  Core,
  Web,
  RegistererOptions,
  RegistererUnregisterOptions,
  RegistererRegisterOptions,
  UserAgentOptions,
  Invitation,
  InvitationAcceptOptions,
  InviterInviteOptions,
  InviterOptions,
  Message
};
// export { Web, Core};

export class MivisinSIP {
  public simpleUser: Web.SimpleUser | undefined;
  public options: Web.SimpleUserOptions | undefined;
  public delegate: Web.SimpleUserDelegate | undefined;

  constructor(server: string, options: Web.SimpleUserOptions = {}) {
    this.options = { ...options };
    this.simpleUser = new Web.SimpleUser(server, options);
    // this.delegate = this.simpleUser.delegate;
  }

  // // // Helper function to get an HTML audio element
  // private getAudioElement = function(id: string): HTMLAudioElement {
  //     const el = document.getElementById(id);
  //     if (!(el instanceof HTMLAudioElement)) {
  //         throw new Error(`Element "${id}" not found or not an audio element.`);
  //     }
  //     return el;
  // }

  // // Helper function to wait
  // private wait = async function (ms: number): Promise<void> {
  //     return new Promise((resolve) => {
  //         setTimeout(resolve, ms);
  //     });
  // }

  public isConnected(): boolean {
    return this.simpleUser == undefined ? false : this.simpleUser.isConnected();
  }
  public isHeld(): boolean {
    return this.simpleUser == undefined ? false : this.simpleUser.isHeld();
  }

  public isMuted(): boolean {
    return this.simpleUser == undefined ? false : this.simpleUser.isMuted();
  }

  // let wssServerUrl : HTMLInputElement | undefined;
  // let extName : HTMLInputElement | undefined;
  // let extPassword : HTMLInputElement | undefined;
  // let domain : HTMLInputElement | undefined;
  // private destExt : HTMLInputElement | undefined = document.querySelector("#extId2")  as HTMLInputElement;
  // private destCalledId : HTMLInputElement | undefined = document.querySelector("#calledId")  as HTMLInputElement;
  // let aor : string;
  public audioElement: HTMLAudioElement | undefined;
  // wssServerUrl = document.querySelector("#wssServerUrl")  as HTMLInputElement;
  // extName = document.querySelector("#extName")  as HTMLInputElement;
  // extPassword = document.querySelector("#extPassword")  as HTMLInputElement;
  // domain = document.querySelector("#domain")  as HTMLInputElement;

  // document.onload = function() {
  //  // SIP over WebSocket Server URL
  //   // The URL of a SIP over WebSocket server which will complete the call.
  //   // FreeSwitch is an example of a server which supports SIP over WebSocket.
  //   // SIP over WebSocket is an internet standard the details of which are
  //   // outside the scope of this documentation, but there are many resources
  //   // available. See: https://tools.ietf.org/html/rfc7118 for the specification.
  //   // "wss://www.mivisin.com:7443";
  //   // SIP Request URI
  //   // The SIP Request URI of the destination. It's "Who you wanna call?"
  //   // SIP is an internet standard the details of which are outside the
  //   // scope of this documentation, but there are many resources available.
  //   // See: https://tools.ietf.org/html/rfc3261 for the specification.
  // //   const destination = "sip:1002@47.107.70.164";

  //   // SIP Address of Record (AOR)
  //   // This is the user's SIP address. It's "Where people can reach you."
  //   // SIP is an internet standard the details of which are outside the
  //   // scope of this documentation, but there are many resources available.
  //   // See: https://tools.ietf.org/html/rfc3261 for the specification.
  // //   const aor = "sip:1003@47.107.70.164";

  //   // Configuration Options
  //   // These are configuration options for the `SimpleUser` instance.
  //   // Here we are setting the HTML audio element we want to use to
  //   // play the audio received from the remote end of the call.
  //   // An audio element is needed to play the audio received from the
  //   // remote end of the call. Once the call is established, a `MediaStream`
  //   // is attached to the provided audio element's `src` attribute.

  // }

  public connect = async (): Promise<void> => {
    // let aor = "sip:" + extName + "@" + domain;
    // // let contactname = extName + "@" + domain;
    // // this.audioElement =  document.querySelector("#remoteAudio")  as HTMLAudioElement
    // this.audioElement =  this.getAudioElement('remoteAudio');
    // let options: SimpleUserOptions = {
    //     aor,
    //     media: {
    //         remote: {
    //             audio: this.audioElement
    //         }
    //     },
    //     userAgentOptions: {
    //         displayName: extName,
    //         authorizationPassword: extPassword,
    //         authorizationUsername: extName,
    //         // rel100: SIP.C.supported.SUPPORTED,
    //         contactName: extName,
    //         forceRport: true
    //     }
    // };

    // Construct a SimpleUser instance
    // this.simpleUser = new SimpleUser(wssUrl, options);

    // // Supply delegate to handle inbound calls (optional)
    // this.simpleUser.delegate = {
    //     onCallReceived: async () => {
    //         alert("call received");
    //     }
    // }

    await this.simpleUser?.connect();
  };

  public disconnect = async (): Promise<void> => {
    // Run it
    await this.simpleUser?.disconnect();
  };

  public register = async (registererRegisterOptions?: RegistererRegisterOptions): Promise<void> => {
    // Run it
    await this.simpleUser?.register(registererRegisterOptions);
  };

  public unregister = async (registererUnregisterOptions?: RegistererUnregisterOptions): Promise<void> => {
    await this.simpleUser?.unregister(registererUnregisterOptions);
  };

  public call = async (
    destination: string,
    inviterOptions?: InviterOptions,
    inviterInviteOptions?: InviterInviteOptions
  ): Promise<void> => {
    await this.simpleUser?.call(destination, inviterOptions, inviterInviteOptions);
  };

  public hangup = async (): Promise<void> => {
    await this.simpleUser?.hangup();
  };

  public answer = async (invitationAcceptOptions?: InvitationAcceptOptions): Promise<void> => {
    await this.simpleUser?.answer(invitationAcceptOptions);
  };

  public decline = async (): Promise<void> => {
    await this.simpleUser?.decline();
  };

  public hold = async (): Promise<void> => {
    await this.simpleUser?.hold();
  };

  public unhold = async (): Promise<void> => {
    await this.simpleUser?.unhold();
  };

  public mute = async (): Promise<void> => {
    await this.simpleUser?.mute();
  };

  public unmute = async (): Promise<void> => {
    await this.simpleUser?.unmute();
  };

  public sendDTMF = async (tone: string): Promise<void> => {
    await this.simpleUser?.sendDTMF(tone);
  };

  public sendMessage = async (destination: string, message: string): Promise<void> => {
    await this.simpleUser?.message(destination, message);
  };

  // public updatemedia = async (media: Web.SimpleUserMedia): Promise<void> => {
  //   await this.simpleUser?.updatemedia(media);
  // };
}
